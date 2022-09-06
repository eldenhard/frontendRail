<template>
        <div id="tableMain">
<div class="table1" style="display: flex;">
    <table style="margin-top: -0.1px;">
      <thead>
        <tr>
          <th>{{WagonModel.number}}</th>
          <th> {{WagonModel.is_problem}}</th>
          <th>{{WagonModel.features}}</th>
          <th>{{WagonModel.volume}}</th>
          <th>{{WagonModel.tare}}</th>
          <th>{{WagonModel.type}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{WagonModel.number}}</td>
          <td>
            <span>{{WagonModel.is_problem}}</span>
          </td>
          <td>
            <span>{{WagonModel.features}}</span>
          </td>
          <td>
            <span>{{WagonModel.volume}}</span>
          </td>
          <td class="wrap">{{WagonModel.tare}}</td>
          <td>
            <span>{{WagonModel.type}}</span>
          </td>
        </tr>
       
       
      </tbody>
    </table>
  

                <b-card no-body
                style="background: #ECECEC;
                border: none;
                text-decoration: none;
                width: 100%;">
                    <b-tabs card  style="background: #ECECEC;"  small card>
                        <b-tab title="Состояние вагона" active style="color: black;" >
                            <b-card-text>
                                <table style="margin-top: -12px">
                                        <thead>
                                            <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th> {{WagonState.State}}</th>
                                            <th>{{WagonState.ValueState}}</th>
                                            <th>{{WagonState.ValueStateNumber}}</th>
                                            <th>{{WagonState.DateChangeState}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>
                                                <span>{{WagonState.State}}</span>
                                            </td>
                                            <td>
                                                <span>{{WagonState.ValueState}}</span>
                                            </td>
                                            <td>
                                                <span>{{WagonState.ValueStateNumber}}</span>
                                            </td>
                                            <td class="wrap">{{WagonState.DateChangeState}}</td>

                                            </tr>
                                        
                                        </tbody>
                                    </table>         
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Тип вагона">
                                <b-card-text>
                                    <table style="margin-top: -12px; ">
                                        <thead>
                                            <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonTypeModel.name}}</th>
                                            <th>{{WagonTypeModel.short_name}}</th>
                                            <th>{{WagonTypeModel.in_use}}</th>
                                            <th>{{WagonTypeModel.name_rp}}</th>
                                            <th>{{WagonTypeModel.foot_length}}</th>
                                            <th>{{WagonTypeModel.code_ustng_empty}}</th>
                                            <th>{{WagonTypeModel.code_gng_empty}}</th>
                                            <th>{{WagonTypeModel.code_etsng_empty_repair}}</th>
                                            <th>{{WagonTypeModel.trf_code}}</th>
                                            <th>{{WagonTypeModel.rtf_equal_container_code}}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>
                                                {{WagonTypeModel.name}}
                                            </td>
                                            <td>
                                                {{WagonTypeModel.short_name}}
                                            </td>
                                            <td>
                                                {{WagonTypeModel.in_use}}
                                            </td>
                                            <td class="wrap">{{WagonTypeModel.name_rp}}</td>
                                            <td>
                                                {{WagonTypeModel.foot_length}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_ustng_empty}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_gng_empty}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_etsng_empty_repair}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.trf_code}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.rtf_equal_container_code}}                                           
                                             </td>
                                            
                                            </tr>
                                        
                                        </tbody>
                                    </table>                                         </b-card-text>
                        </b-tab>

                        <b-tab title="Паспорт вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                      
                                    </table>                                     </b-card-text>
                        </b-tab>
                        <b-tab title="Принадлежность вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                       
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Ремонты вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                       
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Остаточный пробег вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                        
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Модернизация вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                      
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Аренда вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                       
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Лизинг вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                       
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Страхование вагона">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                       
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Инфорамация о вагоне из ЭТРАН">
                            <b-card-text>
                                <table style="margin-top: -12px">
                                        
                                    </table>                                     
                                </b-card-text>
                        </b-tab>
                    </b-tabs>
                    </b-card>
  </div>
        </div>


    </template>
    
    
    
<script>
export default{
    name: 'WagonTable',
    data(){
        return{
            WagonModel:{
                number: 'Номер вагона',
                is_problem : 'Проблемность',
                features : 'Особенности модели вагона',
                volume: 'Объем вагона',
                tare: 'Тара вагона',
                type: 'Тип вагона'
            },
            WagonState:{
                State: 'Состояние',
                ValueState: 'Значение "Состояние"',
                ValueStateNumber: 'Значение "Состояние" числовое',
                DateChangeState: "Дата изменения состояния"
            },
            WagonTypeModel:{
                name: 'Наименование',
                short_name: 'Краткое наименование',
                in_use: 'Используется',
                name_rp: 'Наименование в р.п.',
                foot_length: 'Футовость контейнера',
                code_ustng_empty: 'Код УСТНГ для порожнего',
                code_gng_empty: 'Код ГНГ для порожнего',
                code_etsng_empty_repair: 'Код ЕСТНГ для порожнего в ремонте',
                trf_code: 'Код типа п.с. в Рейл-Тариф',
                rtf_equal_container_code: 'Код экв. типа кнт. в Рейл-Тариф'
            }
        }
    } 
}
    
    
    </script>
    
<style>
#tableMain{
    background: rgb(236, 236, 236);
    overflow: auto;
    }
table{
        overflow-x: auto !important;
    }

tr,td,th{
    font-size: 12px;
    border: 1px solid rgb(184, 184, 184);
    background: white;
    text-align: center;
    padding: 5px 10px;
}
.info-table{
    margin-top: 66px;
    width: 50vw;
}
th{
    background: #c04945;
    border: 1px solid black;
    color: white;
}

.table1 table {
  /* width: 35% !important; */
  border-spacing: 0 !important;
  margin-top: 3%;
}
.table1 table thead tr th {
  text-align: left !important;
  border-bottom: solid 3px #c04945 !important;
  padding: 8px !important;
  font-size: small;
  background-color: #eee !important;
  color: #000000 !important;
}
.table1 table tbody tr td {
  transition: all 0.15s ease !important;
  padding: 8px !important;
}
.table1 table tbody td span {
  font-size: x-small;
  display: block;
}
.table1 table tbody td span:first-child {
  font-size: small;
  line-height: 1.5em;
  display: block;
}
.table1 table tbody tr:hover {
  background-color: #eee !important;
  outline: solid 1px #c04945  !important;
}
.table1 table th,
.table1 table td:not(.wrap) {
  white-space: nowrap !important;
}
    </style>
    