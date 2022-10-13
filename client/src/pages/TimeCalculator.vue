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
    <button type="button" @click="showDate">clg date</button>
    <h2 id="result" v-if="timeDiff">{{ timeDiff }}</h2>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import DateTimeForm from '../components/DateTimeForm.vue'

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
  // console.log(start, end, timeDiff)
}
</script>

<style></style>
