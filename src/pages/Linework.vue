<template>
    <div>
        <h1>A responsive table</h1>
        
        <table class="responsive">
            <thead>
                <tr>
                    <th>作业标题</th>
                    <th>班级</th>
                    <th>来自老师</th>
                    <th>时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="organisationnumber">我是标题</td>
                    <td class="organisationname">我是班级</td>
                    <td class="organisationname">我是老师</td>
                    <td class="organisationname">我是时间</td>
                    <td class="organisationname">我是状态</td>
                    <td class="actions"> <a href="?" class="edit-item" title="Edit">编辑作业</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Linework',
    data () {
        return {
        
        }
    }
}


</script>
<style scoped>
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
            content:'标题';
        }
        table.responsive td:nth-child(2):before {
            content:'班级';
        }
        table.responsive td:nth-child(3):before {
            content:'来自老师';
        }
        table.responsive td:nth-child(4):before {
            content:'时间';
        }
        table.responsive td:nth-child(5):before {
            content:'状态';
        }
        table.responsive td:nth-child(1),
        table.responsive td:nth-child(2),
        table.responsive td:nth-child(3),
        table.responsive td:nth-child(4),
        table.responsive td:nth-child(5) {
            padding-left: 25%;
        }
        table.responsive td:nth-child(1):before,
        table.responsive td:nth-child(2):before,
        table.responsive td:nth-child(3):before,
        table.responsive td:nth-child(4):before,
        table.responsive td:nth-child(5):before {
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