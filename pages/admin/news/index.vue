<script>
export default {
  layout: 'admin',
  middleware: 'admin',
  head() {
    return {
      title: `Новости | ${process.env.APP_NAME}`
    };
  }
}
</script>

<template>
  <a-row :gutter="32" style="background: #fff">
    <a-col class="card-wrapper" :span="6">
      <a-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" key="setting" />
          <a-icon type="edit" key="edit" />
          <a-icon type="ellipsis" key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col class="card-wrapper" :span="6">
      <a-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" key="setting" />
          <a-icon type="edit" key="edit" />
          <a-icon type="ellipsis" key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col class="card-wrapper" :span="6">
      <a-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" key="setting" />
          <a-icon type="edit" key="edit" />
          <a-icon type="ellipsis" key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col class="card-wrapper" :span="6">
      <a-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" key="setting" />
          <a-icon type="edit" key="edit" />
          <a-icon type="ellipsis" key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col class="card-wrapper" :span="6">
      <a-card hoverable style="width: 300px">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" key="setting" />
          <a-icon type="edit" key="edit" />
          <a-icon type="ellipsis" key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<style lang="scss">
  .card-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
</style>
