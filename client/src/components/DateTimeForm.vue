<template>
  <div>
    <form>
      <label for="take-off-date">Take Off</label>
      <input
        id="take-off-date"
        name="takeOffDate"
        type="date"
        @input="$emit('updateTakeOffDate', $event.target.value)"
        :value="takeOffDate"
      />
      <select
        id="take-off-hour"
        name="hour"
        @input="
          $emit('updateTakeOffTime', $event.target.name, $event.target.value)
        "
      >
        <option>0</option>
        <option v-for="n in 24" :key="n" :value="n">{{ n }}</option>
      </select>
      <select
        id="take-off-min"
        name="min"
        @input="
          $emit('updateTakeOffTime', $event.target.name, $event.target.value)
        "
      >
        <option>0</option>
        <option v-for="n in 59" :key="n" :value="n">{{ n }}</option>
      </select>
      <label for="land-date">Land</label>
      <input
        id="land-date"
        name="landDate"
        type="date"
        @input="$emit('updateLandDate', $event.target.value)"
        :value="landDate"
      />
      <select
        id="land-hour"
        name="hour"
        @input="
          $emit('updateLandTime', $event.target.name, $event.target.value)
        "
      >
        <option>0</option>
        <option v-for="n in 24" :key="n" :value="n">{{ n }}</option>
      </select>
      <select
        id="land-min"
        name="min"
        @input="
          $emit('updateLandTime', $event.target.name, $event.target.value)
        "
      >
        <option>0</option>
        <option v-for="n in 59" :key="n" :value="n">{{ n }}</option>
      </select>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['takeOffDate', 'landDate'])
defineEmits([
  'updateTakeOffDate',
  'updateTakeOffTime',
  'updateLandDate',
  'updateLandTime'
])
</script>

<style></style>
