<template>
  <div v-if="item.items.length > 0" :id="item.id" class="page one mt-5">
    <h3 class="heading">{{ item.title }}</h3>
    <hr />
    <div v-if="item.type == 'items'">
      <Item
        v-for="listItem in item.items"
        :key="listItem.name"
        :item="listItem"
      />
    </div>
    <div v-else-if="item.type == 'skills'">
      <div class="row">
        <Skill
          v-for="listItem in item.items"
          :key="listItem.name"
          :item="listItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Skill from './Skill'

export default {
  name: 'ResumeItem',
  components: {
    Item,
    Skill,
  },
  props: ['item'],
}
</script>

<style></style>
