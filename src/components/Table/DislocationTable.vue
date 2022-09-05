<template>
<div>
    <input v-model="name" @input="getName" @keyup.enter="limits(param)" type="number" placeholder="Количество">
    
        <div id="tableMain" v-bind:value="posts">
                        <table border="1" id="info-table" >
                        <tr>
                            <th  v-for="post in posts" :key="post.id">{{post.id}}</th>
                        </tr>
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
    export default {
    name: 'DislocatoinTable',
    data(){
        return{
            posts: [],
            name: ''
        }
    },
    mixins: [Wagon]
    }
</script>