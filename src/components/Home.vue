<template>
  <div class="container">
    <div class="row" style="height: '22px', color: '#ff0000', margin-bottom: '5px'">
      <div class="col-xs-12">{{message}}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">
        <form v-on:submit.prevent="handleSubmit">
          <input type="text" placeholder="First Name" class="form-control register-input" v-model="firstName"></input><br>      
          <input type="text" placeholder="Last Name" class="form-control register-input" v-model="lastName"></input><br>    
          <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = 'http://localhost:3903/api/';

export default {
  name: 'home',
  data () {
    return {
      message: '',
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    handleSubmit() {            
      this.message = '';

      if (this.firstName === '') {
        this.message = 'First Name is required';        
        return;
      }

      if (this.lastName === '') {
        this.message = 'Last Name is required';        
        return;
      }
     
      return axios.post(`${API_URL}/Home/Create`, {
        FirstName: this.firstName,
        LastName: this.lastName
      }).then(() => {
        this.firstName = '';
        this.lastName = '';
        this.$router.push('/members');
      }, (err) => {
        console.error(err)
      });        
    }
  }  
}
</script>

