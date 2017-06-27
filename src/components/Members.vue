<template>
    <div class="container">
        <div v-if="members.length">
            <h3>Members</h3>
            <div class="row">
                <div class="cols-sm-4">
                    <ul class="list-group">
                        <li v-for="member in members" :key="member.Id" class="list-group-item">
                            <member :member="member" :onDelete="handleDeleteMember"></member>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>
<script>
import Member from './Member';
import axios from 'axios';
const API_URL = 'http://localhost:3903/api/';

export default {
    components: {
        'member': Member
    },
    data() {
        return {
            members: [1, 2, 3]
        }
    },
    methods: {
        handleDeleteMember(member) {            
            axios.post(`${API_URL}Home/Delete`, member).then((res) => {
                let members = this.members,
                    index = members.findIndex(x => x.Id === member.Id);
                members.splice(index, 1);
                this.members = members;
                
            }, (err) => {
                console.error(err);
            });
        }        
    },

    created() {
        axios.get(`${API_URL}Home/Get`).then((res) => {
            this.members = res.data;           
        }, (err) => {
            console.error(err);
        });
    }
}
</script>


