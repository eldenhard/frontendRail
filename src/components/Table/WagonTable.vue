<template>
<div>
<!-- <button @click="limits(param)">Фильтрация по числу</button> -->
<input v-model="name" @input="getName" @keyup.enter="limits(param)" type="number" placeholder="Количество">

    <div id="tableMain">
                    <table border="1" id="info-table">
                    <tr>
                        <th  v-for="post in posts" :key="post.title">{{post.title}}</th>
                    </tr>
                    <tr>
                        <th  v-for="post in posts" :key="post.id">{{post.id}}</th>
                    </tr>
                    <tr>
                        <td  v-for="post in posts" :key="post.body">{{post.body}}</td>
                    </tr>
                    </table>
    </div>
</div> 
</template>



<script>
import axios from 'axios'


    export default{
        name: 'WagonTable',
        data(){
            return{
                posts: [],
                name: ''
                
            }
        },
        methods:{
            getName: function(){
                this.param = this.name

            },
            limits: async function(let1=''){
                let ans = ('https://jsonplaceholder.typicode.com/posts?' + `_limit=${let1}`)
                let res = await fetch(ans)
                const posts = await res.json()
                this.posts = posts
            }
        // },
        // async mounted(){
        //     axios
        //     let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=45')
        //     let posts = await res.json()
        //     this.posts = posts

        }

    }


</script>

<style>

#tableMain{
    
    overflow: auto;
 
}
tr,th,td{
    height: 20px !important;
    width: 30px !important;
}
#table tr,th,td{
    height: 20px !important;
    width: 30px !important;
}
.form-control{
    width: 300px;
}
</style>
