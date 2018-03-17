<template>
    <div>
        <p class="assistant">
            <input type="text">
            <select>
                <option value ="volvo">Volvo</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </p>
        <table class="responsive">
            <thead>
                <tr>
                    <th>案例类型</th>
                    <th>案例标题</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in caseList">
                    <td class="organisationnumber">{{item.casek_type}}</td>
                    <td class="organisationname">{{item.title}}</td>
                    <td class="actions"> <a href="javascript:;" class="edit-item" title="Edit">案例详情</a>
                    </td>
                </tr>
        
            </tbody>
        </table>
    </div>
</template>

<script>
    // 引入vueajax
    import axios from 'axios';

    export default {
        name: '',
        data () {
            return {
                token: "008e6a65003c3c2fc6857b550c15ebd2",
                caseList: []
            }
        },
        mounted(){
            this.getCasedata();
        },
        methods :{
            getCasedata (){
                var param = this.token; 
                axios.post(
                    'http://proxy.xqq888.com/yun/casek/index',{
                    token : param
                }).then((result) => {
                    this.caseList =result.data;
                }).catch(error => {

                });
            }
        },

    }
</script>
<style scoped>
    .assistant { text-align: right;}

    table.responsive {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
    }
    table.responsive th, table.responsive td {
        border: 1px solid #B3BFAA;
        padding: .5em 1em;
    }
    table.responsive th {
        background: #D5E0CC;
    }
    table.responsive td {
        background: #fff;
    }
    table.responsive {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 30em) {
        table.responsive {
            box-shadow: none;
        }
        table.responsive thead {
            display: none;
        }
        table.responsive td:nth-child(1):before {
            content:'案例类型';
        }
        table.responsive td:nth-child(2):before {
            content:'案例标题';
        }
        table.responsive td:nth-child(1), table.responsive td:nth-child(2) {
            padding-left: 25%;
        }
        table.responsive td:nth-child(1):before, table.responsive td:nth-child(2):before {
            position: absolute;
            left: .5em;
            font-weight: bold;
        }
        table.responsive tr, table.responsive td {
            display: block;
        }
        table.responsive tr {
            position: relative;
            margin-bottom: 1em;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
        }
        table.responsive td {
            border-top: none;
        }
        table.responsive td.organisationnumber {
            background: #D5E0CC;
            border-top: 1px solid #B3BFAA;
        }
        table.responsive td.actions {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background: none;
        }
    }
</style>

