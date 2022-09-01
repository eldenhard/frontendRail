<template>
    <div id="tableMain">
                    <table border="1" id="info-table">
                    <tr>
                        <th  v-for="post in posts" :key="post.title">{{post.id}}</th>
                    </tr>
                    <tr>
                        <td  v-for="post in posts" :key="post.body">{{post.body}}</td>
                    </tr>
                    </table>
    </div>
</template>


<script>
import axios from 'axios'


    export default{
        name: 'WagonTable',
        data(){
            return{
                posts: null,
                
            }
        },
        async mounted(){
            axios
            let res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            let posts = await res.json()
            this.posts = posts

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
