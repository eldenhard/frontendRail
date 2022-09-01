<template>
  <div>
    <div id="navbarMain">
          <ul class="navbarul">
              <li class="navbarList"> 
                <div @click="newTab('Dislocation')">  
                  <img src="@/assets/map.png" class="image">
                </div>
                <b-dropdown id="dropdown-1" text="Дислокация" class="m-md-2">
                    <b-dropdown-item @click="newTab('Dislocation')">дислокация 1</b-dropdown-item>
                </b-dropdown>
              </li>

              <li class="navbarList" >   
                <div @click="newTab('Flight')">  
                  <img src="@/assets/flight.png" class="image">
                  <!-- <p class="navbarDescription">Рейсы▾</p> -->
                </div>
                <b-dropdown id="dropdown-1" text="Рейсы" class="m-md-2">
                    <b-dropdown-item @click="newTab('Flight')">Рейсы 1</b-dropdown-item>
                </b-dropdown>
              </li>

              <li class="navbarList">  
                <div @click="newTab('Wagon')">
                  <img src="@/assets/wagon.png" class="image">
                </div> 
                <b-dropdown id="dropdown-1" text="Вагоны" class="m-md-2">
                    <b-dropdown-item @click="newTab('Wagon')">Вагоны 1</b-dropdown-item>
                </b-dropdown>
              </li>

              <li class="navbarList" >  
                <div @click="newTab('Report')">   
                  <img src="@/assets/report.png" class="image">
                </div>
                <b-dropdown id="dropdown-1" text="Отчеты" class="m-md-2">
                  <b-dropdown-item @click="newTab('Report')">Отчеты 1</b-dropdown-item>
                </b-dropdown>
              </li>
        </ul>
    </div>


                <div>
                  <b-card no-body class="leftTable">
                    <b-tabs card>
                      <b-tab v-for="i in tabs" :key="i.id">
                          <template #title>
                              <span>Таблица {{i.name}}</span>
                              <span @click="closeTab(i.id)">&nbsp;&nbsp;❌</span>
                          </template>
                          <b-card-text>
                              {{i.name}}
                              <WagonTable v-if="visible"></WagonTable>
                              <FlightTable></FlightTable>
                          </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
                
               

  </div>

</template>

<script>
import WagonTable from './Table/WagonTable.vue'
import FlightTable from './Table/FlightTable.vue'
export default{
    name: 'WagonPark',
    components:{WagonTable, FlightTable},
    data() {  
      return {
        tabs: [],
        tabCounter: 0,
        visible: false
      }
    },
    methods:{
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].id === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab(tabname) {
            this.tabs.push({'id': this.tabCounter++,
                            'name': tabname})
            
                      
          }
     
    }
  }
</script>


<style>
select{
  width: 100%;
  box-sizing: border-box;
}

  #navbarMain{
  background: #CECECE;
  display: block;
  height: 120px;
}
.navbarList li > a {
  display: block;
  text-decoration: none;
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
height: 100px;
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
    /* padding-top: 6px; */
    margin-bottom: 0;
    bottom: 0;
   text-align: left;
}
</style>








