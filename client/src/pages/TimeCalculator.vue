<template>
  <div>
    <form>
      <label for="take-off-date">Take Off</label>
      <input
        id="take-off-date"
        name="takeOffDate"
        type="date"
        @input="updateTakeOffDate"
        :value="takeOffDate"
      />
      <select id="take-off-hour">
        <option>0</option>
        <option v-for="n in 24" :key="n" :value="n">{{ n }}</option>
      </select>
      <select id="take-off-min">
        <option>0</option>
        <option v-for="n in 59" :key="n" :value="n">{{ n }}</option>
      </select>
      <label for="land-date">Land</label>
      <input
        id="land-date"
        name="landDate"
        type="date"
        @input="updatelandDate"
        :value="landDate"
      />
      <select id="land-hour">
        <option>0</option>
        <option v-for="n in 24" :key="n" :value="n">{{ n }}</option>
      </select>
      <select id="land-min">
        <option>0</option>
        <option v-for="n in 59" :key="n" :value="n">{{ n }}</option>
      </select>
      <button type="button" @click="showDate">clg date</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

const updateTakeOffDate = (e) => {
  takeOffDate.value = e.target.value
}
const updatelandDate = (e) => {
  landDate.value = e.target.value
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
  console.log(takeOffDateTime.value, landDateTime.value)
}
</script>

<style></style>
