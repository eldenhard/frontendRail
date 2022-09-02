<template>

    <div>
        <div id="navbarMain">
            <ul class="navbarul">
                <li class="navbarList">
                    <div @click="newTab('Dislocation')">
                        <img src="@/assets/map.png" class="image">
                    </div>
                    <b-dropdown text="Дислокация">
                        <b-dropdown-item @click="newTab('Dislocation')">дислокация 1</b-dropdown-item>
                    </b-dropdown>
                </li>
  
                <li class="navbarList" >
                    <div @click="newTab('Flight')">
                        <img src="@/assets/flight.png" class="image">
                    </div>
                    <b-dropdown text="Рейсы">
                        <b-dropdown-item @click="newTab('Flight')">Рейсы 1</b-dropdown-item>
                    </b-dropdown>
                </li>
  
                <li class="navbarList">
                    <div @click="newTab('Wagon')">
                        <img src="@/assets/wagon.png" class="image">
                    </div>
                    <b-dropdown  text="Вагоны" >
                        <b-dropdown-item @click="newTab('Wagon')">Вагоны 1</b-dropdown-item>
                    </b-dropdown>
                </li>
  
                <li class="navbarList" >
                    <div @click="newTab('Report')">
                        <img src="@/assets/report.png" class="image">
                    </div>
                    <b-dropdown text="Отчеты">
                        <b-dropdown-item @click="newTab('Report')">Отчеты 1</b-dropdown-item>
                    </b-dropdown>
                </li>
            </ul>
        </div>
    </div>
  
  
  
  
  </template>
  
  <script>
  // import Wagon from '';
  
  export default{
    name: 'Navbar',
    props: ['tabs', 'counter'],
    data: function(){
        return{
            inner_counter: this.counter
        }
    },
    methods:{
        newTab(tabname) {
            this.tabs.push({'name': tabname, 'id': this.inner_counter++ })
        }
  
    }}
  
  
  </script>
  
  
  
  <!-- <div>
      <button class="button Request">Запрос</button>
      <button class="button Accept">Подтверждение</button>
      <button class="button Delete">Удаление</button>
      <button class="button Action">Действие</button>
      <button class="button Cancel">Отмена</button>
      </div> -->
  
  
  
   <style scoped>
  
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .button{
      color: white;
      border: none;
      outline: none;
      width: 130px;
      height: 25px;
      letter-spacing: 1px;
      border-radius: 7px;
      font-weight: 500;
      font-size: 13px;
  }
  .Delete{
      background: #ED5E68;
  }
  .Delete:hover{
      background: #c04850;
      cursor: pointer;
  }
  .Request{
      background: #2196F3;
  }
  .Request:hover{
      background: #1a70b6;
      cursor: pointer;
  }
  .Accept{
      background: #45AC53;
  }
  .Accept:hover{
      background: #2e7a38;
      cursor: pointer;
  }
  .Action{
      background: #ed925e;
  }
  .Action:hover{
      background: #c27549;
      cursor: pointer;
  }
  .Cancel{
      background: #8388A4;
  }
  .Cancel:hover{
      background: #63677c;
      cursor: pointer;
  }
  
  
  
  </style>
  