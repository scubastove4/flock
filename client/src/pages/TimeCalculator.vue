<template>
  <section>
    <DateTimeForm
      :takeOffDate="takeOffDate"
      :landDate="landDate"
      @updateTakeOffDate="updateTakeOffDate"
      @updateTakeOffTime="updateTakeOffTime"
      @updateLandDate="updateLandDate"
      @updateLandTime="updateLandTime"
    />
    <label for="straight-hours">OR Input Hours: </label>
    <input
      id="straight-hours"
      type="text"
      name="hour"
      :value="straightHours.hour"
      @input="updateStraightHours"
    />
    <label for="straight-mins">AND Minutes: </label>
    <input
      id="straight-mins"
      type="text"
      name="min"
      :value="straightHours.min"
      @input="updateStraightHours"
    />
    <button type="button" @click="showDate">Convert to Decimal</button>
    <h2 id="result">Decimal Result: {{ timeDiff }}</h2>
    <h2 id="result" v-if="timeDiff">{{ timeDiff }}</h2>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import DateTimeForm from '../components/DateTimeForm.vue'

const straightHours = ref({
  hour: 0,
  min: 0
})
const takeOffDate = ref(null)
const landDate = ref(null)

const takeOffDateTime = ref({
  year: '',
  month: '',
  day: '',
  hour: '',
  min: '',
  sec: 0
})

const landDateTime = ref({
  year: '',
  month: '',
  day: '',
  hour: '',
  min: '',
  sec: 0
})

let timeDiff = ref(null)

const updateStraightHours = (e) => {
  // if (isNaN(parseInt(e.target.value))) {
  //   return (timeDiff.value = `Total ${e.target.name}s must be a number`)
  // } else {
  // }
  straightHours.value[e.target.name] = parseInt(e.target.value)
}
const updateTakeOffDate = (val) => {
  takeOffDate.value = val
}

const updateTakeOffTime = (name, val) => {
  takeOffDateTime.value[name] = val
}

const updateLandDate = (val) => {
  landDate.value = val
}

const updateLandTime = (name, val) => {
  landDateTime.value[name] = val
}

const showDate = () => {
  // if (straightHours.value.hour < 0) {
  //   return (timeDiff.value = 'Total hours must be at least 0')
  // } else if (isNaN(straightHours.value.hour)) {
  //   return (timeDiff.value = 'Total hours must be a number')
  // } else if (straightHours.value.min < 0) {
  //   return (timeDiff.value = 'Total minutes must be at least 0')
  // } else if (straightHours.value.min > 59) {
  //   return (timeDiff.value = 'Total minutes cannot exceed 59')
  // } else if (isNaN(straightHours.value.min)) {
  //   return (timeDiff.value = 'Total minutes must be a number')
  // } else
  if (straightHours.value.hour > 0 || straightHours.value.min > 0) {
    let hoursToMin = straightHours.value.hour * 60
    let totalMin = hoursToMin + straightHours.value.min
    return (timeDiff.value = (totalMin * 100) / (60 * 100))
    // console.log(timeDiff.value)
  } else {
    let takeOffDateArr = takeOffDate.value.split('-')
    let landDateArr = landDate.value.split('-')
    takeOffDateTime.value = {
      ...takeOffDateTime.value,
      year: takeOffDateArr[0],
      month: takeOffDateArr[1],
      day: takeOffDateArr[2]
    }

    landDateTime.value = {
      ...landDateTime.value,
      year: landDateArr[0],
      month: landDateArr[1],
      day: landDateArr[2]
    }

    let start = new Date(
      takeOffDateTime.value.year,
      takeOffDateTime.value.month - 1,
      takeOffDateTime.value.day,
      takeOffDateTime.value.hour,
      takeOffDateTime.value.min,
      takeOffDateTime.value.sec
    )
    let end = new Date(
      landDateTime.value.year,
      landDateTime.value.month - 1,
      landDateTime.value.day,
      landDateTime.value.hour,
      landDateTime.value.min,
      landDateTime.value.sec
    )
    return (timeDiff.value = (end - start) / (1000 * 60 * 60))
  }
  // console.log(start, end, timeDiff)
}
</script>

<style></style>
