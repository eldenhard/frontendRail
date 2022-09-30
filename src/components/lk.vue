<template>
    <div class="lk">
        <h2>Личный кабинет сотрудника</h2>
        {{posts}}
    </div>
</template>

<style>
 .lk h2{
    text-align: center;
    padding-top: 2%;
}
</style>

<script>
import {mapState} from "vuex";

export default{
name: 'lk',
data(){
    return{
        'posts': [] 
    }
},
async mounted() {
    
    let lk = await fetch('http://10.1.5.65/api/personal/users/', {
        headers: {
            'Authorization': 'Basic YS5yZXNoZXRpbG9AdGVodHJhbnMuY29tOlRlaHRyYW5zMjAyMg=='
        }
    });
    let posts = await lk.json();
    this.posts = posts
},
computed: {
    ...mapState({
    user: state => state.user
    })
}
}
    
    
    
    </script>
    