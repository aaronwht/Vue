<template>
  <div class="row">
    <div class="col-xs-2">
      <router-link :to="{name: 'Edit', params: { memberId: member.Id }}">
        <strong>{{member.FirstName}} {{member.LastName}}</strong>
      </router-link>
    </div>
    <div class="col-xs-10">
      <button style="margin-left: '5px'" class="btn btn-danger btn-xs" v-on:click="onDelete(member)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member', 'onDelete']  
}
</script>