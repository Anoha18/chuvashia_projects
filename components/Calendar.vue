<template>
  <div class="calendar">
    <div class="calendar__hdr">
      <svg class="calendar__arrow" @click="handleLeftClick">
        <use xlink:href="@/assets/img/svg/sprite.svg#arrow_left"/>
      </svg>
      <p class="calendar__month">{{ monthsNames[currentMonth] }} {{ currentYear }}</p>
      <svg class="calendar__arrow" @click="handleRightClick">
        <use xlink:href="@/assets/img/svg/sprite.svg#arrow_right"/>
      </svg>
    </div>
    <div class="calendar__divider"></div>
    <table class="calendar__content">
      <thead class="calendar__week">
        <tr>
          <th v-for="weekDay in week" class="calendar__week-day">{{ weekDay }}</th>
        </tr>
      </thead>
      <tbody class="calendar__days">
        <tr v-for="(week, weekIndex) in month">
          <td v-for="(day, dayIndex) in week" :class="'calendar__day' + (day.active ? ' calendar__day_active' : '')" @click="month = month.map((newWeek, newWeekIndex) => newWeek.map((newDay, newDayIndex) => (newWeekIndex === weekIndex && newDayIndex === dayIndex) ? {...newDay, active: true } : { ...newDay, active: false }))">
            {{ day.d }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="calendar__divider"></div>
    <div class="calendar__ftr">
      <p class="calendar__ftr-ttl">Статусы</p>
      <div class="calendar__statuses">
        <div class="calendar__status">В ожидании</div>
        <div class="calendar__status calendar__status_s_done">Выполнено</div>
        <div class="calendar__status calendar__status_s_moved">Отложено</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        month: [
          [{ d: '24' }, { d: '25' }, { d: '26' }, { d: '27' }, { d: '28' }, { d: '29' }, { d: '1' }],
          [{ d: '2' }, { d: '3' }, { d: '4' }, { d: '5' }, { d: '6' }, { d: '7' }, { d: '8' }],
          [{ d: '9' }, { d: '10' }, { d: '11' }, { d: '12' }, { d: '13' }, { d: '14' },{ d: '15' }],
          [{ d: '16',  }, { d: '17' }, { d: '18' },{ d: '19' },{ d: '20' },{ d: '21' },{ d: '22' }],
          [{ d: '23' }, { d: '24' }, { d: '25' }, { d: '26' }, { d: '27' }, { d: '28' }, { d: '29' }],
          [{ d: '30', active: true }, { d: '31' }, { d: '1' }, { d: '2' }, { d: '3' }, { d: '4' }, { d: '5' }]
        ],
        monthsNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        currentMonth: 2,
        currentYear: 2020
      }
    },
    methods: {
      handleLeftClick: function() {
        if (this.currentMonth > 0) {
          this.currentMonth--;
        } else {
          this.currentYear--;
          this.currentMonth = 11;
        }
      },
      handleRightClick: function() {
        if (this.currentMonth < 11) {
          this.currentMonth++
        } else {
          this.currentYear++;
          this.currentMonth = 0;
        }
      }
    }
  }
</script>

<style scoped>
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: #FCFCFC;
    border-radius: 9px;
  }
  .calendar__hdr {
    width: 220px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .calendar__arrow {
    width: 24px;
    height: 24px;
    fill: #0D1C2E;
    cursor: pointer;
  }
  .calendar__arrow:hover {
    transform: scale(1.1);
  }
  .calendar__month {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: bold;
    color: #000;
  }
  .calendar__divider {
    height: 1px;
    width: 100%;
    background: #000;
    mix-blend-mode: normal;
    opacity: 0.17;
    margin: 25px 0;
  }
  .calendar__content {
    font-size: .9375rem;
    line-height: .9375rem;
    font-weight: 400;
    color: #000;
    text-align: center;
  }
  .calendar__week-day {
    vertical-align: baseline;
    height: 42px;
    width: 40px;
    font-weight: 400;
    opacity: .6;
  }
  .calendar__day {
    height: 38px;
    width: 38px;
    min-width: 38px;
    border-radius: 50%;
    cursor: pointer;
  }
  .calendar__day:hover {
    background: #e7e7e7;
  }
  .calendar__day_active {
    background: #4FA2F0;
    color: #fff;
  }
  .calendar__day_active:hover {
    background: #4FA2F0;
  }
  .calendar__ftr {
    width: 100%;
  }
  .calendar__ftr-ttl {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 1rem;
  }
  .calendar__statuses {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .calendar__status {
    background: #C5C5C5;
    border-radius: 12px;
    width: calc(50% - 5px);
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.0625rem;
    line-height: 1.0625rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
  }
  .calendar__status_s_done {
    background: #A3EE03;
  }
  .calendar__status_s_moved {
    background: #FF467E;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .calendar {
      padding: 25px;
    }
  }

  @media (max-width: 768px) {
    .calendar {
      padding: 20px;
    }
    .calendar__divider {
      margin: 15px 0;
    }
    .calendar__content {
      font-size: .875rem;
      line-height: .875rem;
    }
    .calendar__week-day {
      width: 30px;
      height: 30px;
    }
    .calendar__day {
      height: 30px;
      width: 30px;
      min-width: 30px;
    }
    .calendar__status {
      width: calc(33.3% - 5px);
      font-size: .875rem;
      line-height: .875rem;
      margin-bottom: 0;
      margin-right: 0;
    }
    .calendar__status:not(:last-child) {
      margin-right: 7px;
    }
  }
</style>
