<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-3">
                <form v-on:submit.prevent="handleSubmit">
                    <input 
                        type="text" 
                        class="form-control register-input" 
                        placeholder="First Name" 
                        v-model="member.FirstName"><br>
                    <input 
                        type="text" 
                        class="form-control register-input" 
                        placeholder="Last Name" 
                        v-model="member.LastName"><br>
                    <button type="submit" class="btn btn-primary btn-block">Update Member</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

const API_URL = 'http://localhost:3903/api/';
export default {    
    data() {
        return {
            member: {}
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            axios.post(`${API_URL}Home/Edit`, this.member)
                .then((res) => {
                    this.$router.push('/members')
                }, (err) => {
                    console.error(err);
                });
        }
    },
    created() {                 
        axios.get(`${API_URL}Home/Edit/?id=${this.$route.params.memberId}`)
        .then((res) => {
            this.member = res.data;
        }, (err) => {
            console.error(err);
        })
    }
}
</script>


