<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { myInstantiatedClass} from './randomDetails';



@Component
export default class AboutDetails extends Vue {
  get msg(){
    myInstantiatedClass.setMsg('Setting Override from AboutDetails');
    console.log(myInstantiatedClass);
    return myInstantiatedClass.msg;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
