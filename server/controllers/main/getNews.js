const db = require('../../db');

module.exports = async (req, res) => {
  const params = req.body;

  console.log('params: ', params);
  let query = `
    select
      ti.item_id,
      ti.item_id as id,
      ti.name,
      ti.description,
      to_char(ti.ins_date, 'DD.MM.YYYY HH24:MI') created_date,
      tc.name as cat_name,
      (
        select row_to_json(t) from (
          select ti2.*, tc2.name cat_name from t_item ti2
          inner join t_item_link til2 on til2.object_id = ti2.item_id
          inner join t_link_type tlt2 on tlt2.link_type_id = til2.link_type_id
          inner join t_object_type tot2 on tot2.object_type_id = til2.object_type_id
          inner join t_cat tc2 on tc2.cat_id = ti2.cat_id
          where tot2.brief = 'ITEM'
          and tlt2.brief = 'DIRECTION_NEWS'
          and til2.item_id = ti.item_id
        ) t
      ) as direction,
      (
        select count(*) from t_item_link til2
        inner join t_link_type tlt2 on til2.link_type_id = tlt2.link_type_id
        inner join t_object_type tot2 on til2.object_type_id = tot2.object_type_id
        where tot2.brief = 'SESSION'
        and tlt2.brief = 'VIEW'
      ) as views
    from t_item ti
    inner join t_cat tc on tc.cat_id = ti.cat_id
    where exists (
      select 1 from t_item_link til1
      inner join t_item ti1 on ti1.item_id = til1.object_id
      inner join t_link_type tlt1 on tlt1.link_type_id = til1.link_type_id
      inner join t_object_type tot1 on tot1.object_type_id = til1.object_type_id
      where tot1.brief = 'ITEM'
      and tlt1.brief = 'DIRECTION_NEWS'
      and til1.item_id = ti.item_id
    );
  `;

  if (params.count) {
    query = `${query} limit ${params.count}`;
  }

  console.log('query: ', query);
  try {
    const { rows } = await db.query(query);

    return res.json({ result: rows });
  } catch (error) {
    console.error(error);
    return res.json({ error: error.message });
  }
};
