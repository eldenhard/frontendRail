<template>
<div id="home">
    <div id="navbarMain">
        <ul class="navbarul">
            <li class="navbarList">   
                <img src="@/assets/map.png" class="image">
                
            </li>
            <li class="navbarList">   
                <img src="@/assets/map.png" class="image">
                
            </li>
            <li class="navbarList">   
                <img src="@/assets/map.png" class="image">
                
            </li>
            <li class="navbarList">   
                <img src="@/assets/map.png" class="image">
                
            </li>
            <li class="navbarList">   
                <img src="@/assets/map.png" class="image">
                
            </li>
        </ul>


    
    </div>
<WagonTable></WagonTable>

    <!-- <div>
 <p>Текст запроса</p> {{ info }}
</div> -->


</div>
</template>



<script>
import WagonTable from './Table/WagonTable.vue';

export default{
    name: 'Home',
    components: {WagonTable}
    // data(){
    //     return{
    //         info: []
    //     }
        }
//         mounted(){ 
//         axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => (this.info = response));
//   }
    
  

</script>

<style scoped>
#navbarMain{
    background: #CECECE;
    display: block;
}

.navbarul{
    padding-top: 8px;
    margin-left: 0.5%; 
}
ul.navbarul li{
    display: inline-block;
}
.navbarList{
display: block;
margin-left: 2px;
list-style: none;
text-align: center;
padding: 7px 10px;
border: 1px solid #ECECEC;
background: #ECECEC;
cursor: pointer;
min-width: 90px;
max-height: 78px;
min-height: 78px;

}
.navbarList:hover{
    border: 1px solid #9D9D9D;
}
.image{
    width: 40px;
    margin-top: 5px;
}
.navbarDescription{
    color: #000000;
    font-size: 400;
    font-size: 12px;
    margin-bottom: 0;
    bottom: 0;
   text-align: left;
}

</style>