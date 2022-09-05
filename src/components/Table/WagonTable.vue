<template>
    <div>
      <!-- <button @click="limits(param)">Фильтрация по числу</button> -->
    <input v-model="name" @input="getName" @keyup.enter="limits(param)" type="number" placeholder="Количество">
            <br><br>
        <div id="tableMain" v-bind:value="posts">
                        <table border="1" id="info-table" >
            
                        <tr>
                            <th  v-for="post in posts" :key="post.id">{{post.id}}</th>
                        </tr>
                        <tr>
                            <td  v-for="post in posts" :key="post.body">{{post.body}}</td>
                        </tr>
                        </table>
        </div>


<br>
  <button class="button Accept" @click="saveChange">Сохранить</button>

    </div>
    </template>
    
    
    
<script>
import Wagon from '@/mixins/Wagon'
export default{
    name: 'WagonTable',
    data(){
        return{
            posts: [],
            name: '',
        }
    },
    mixins: [Wagon],
    methods:{
        limits: async function(let1=''){
            let ans = ('https://jsonplaceholder.typicode.com/posts?' + `_limit=${let1}`)
            let res = await fetch(ans)
            const posts = await res.json()
            this.posts = posts
            
        }   ,
        saveChange() {
            const parsed = JSON.stringify(this.posts)
            localStorage.setItem('posts', parsed)
    }
    },
    mounted() {
    // if (localStorage.name) {
    //   this.name = localStorage.name;
    // }
    if (localStorage.getItem('posts')) {
      this.posts = JSON.parse(localStorage.getItem('posts'))
    }

  }
    
     
}
    
    
    </script>
    
<style>
#tableMain{
    overflow: auto;
}
tr,th,td{
    max-height: 41px !important;
    width: 160px !important;
    font-size: 12px;
    }

.form-control{
    width: 300px;
}
    </style>
    