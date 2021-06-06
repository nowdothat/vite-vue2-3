<template>
  <div class="infinite-list-wrapper">
    <ul class="list">
      <li v-for="val in infoList" :key="val._id" class="list-item">
        <a :href="val.items[0].url">{{ val.title }}</a>
      </li>
    </ul>
    <load-more :loader-method="load" :loaderDistance="400" />
  </div>
</template>

<script>
import loadMore from './loadMore.vue'
export default {
  components: {loadMore},
  data () {
    return {
      count: 10,
      loading: false,
      noMore: false,
      infoList: [],
    }
  },
  methods: {
    load () {
      this.loading = true
        if(this.infoList.length) {
          this.getInfo(this.infoList[this.infoList.length-1]._id) 
        } else {
          this.getInfo()
        }
        this.loading = false
    },
    getInfo (param) {
      console.log(param);
      if(param) {
        this.$http.get(`/info/list?_id=${param}`).then(({data}) => {
          if(data) {
            this.infoList = this.infoList.concat(data.items)
          }
        })
      } else {
        this.$http.get('/info/list').then(({data}) => {
          this.infoList = data.items
        })
      }
    },
  }
}
</script>

<style>
.list-item {
  margin-bottom: 12px;
}
</style>