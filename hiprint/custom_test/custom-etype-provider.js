var customElementTypeProvider = (function () {
    return function (options) {

        var addElementTypes = function (context) {
            context.addPrintElementTypes(
                "testModule",
                [
                    new hiprint.PrintElementTypeGroup("常规", [
                        { tid: 'testModule.text', title: '文本', data: '测试文本', type: 'text' },
                        { tid: 'testModule.image', title: '图片', data: '/Content/assets/hi.png', type: 'image' },
                        { tid: 'testModule.longText', title: '长文', data: '155123456789', type: 'longText' },
                        {
                            tid: 'testModule.table', field: 'table', title: '表格',
                            type: 'table',
                            groupFields: ['name'],
                            groupFooterFormatter: function (group, option) {
                                return '这里自定义统计脚信息';
                            },
                            columns: [
                                [{ title: '行号', fixed: true, rowspan: 2, field: 'id', width: 70 },
                                { title: '人员信息', colspan: 2 },
                                { title: '销售统计', colspan: 2 }
                                ],
                                [{ title: '姓名', align: 'left', field: 'name', width: 100 },
                                { title: '性别', field: 'gender', width: 100 },
                                { title: '销售数量', field: 'count', width: 100 },
                                { title: '销售金额', field: 'amount', width: 100 }
                                ]
                            ]
                        },
                        {
                            tid: 'testModule.tableCustom',
                            title: '表格',
                            type: 'tableCustom'
                        },
                        {
                            tid: 'testModule.html', title: 'html',
                            formatter: function (data, options) {
                                return $('div style="height:50pt;width:50pt;background:red;border-radius: 50%;"></div>');
                            },
                            type: 'html'
                        },
                        { tid: 'testModule.customText', title: '自定义文本', customText: '自定义文本', custom: true, type: 'text' }
                    ]),
                    new hiprint.PrintElementTypeGroup("辅助", [
                        {
                            tid: 'testModule.hline',
                            title: '横线',
                            type: 'hline'
                        },
                        {
                            tid: 'testModule.vline',
                            title: '竖线',
                            type: 'vline'
                        },
                        {
                            tid: 'testModule.rect',
                            title: '矩形',
                            type: 'rect'
                        }
                    ])
                ]
            );
        };

        return {
            addElementTypes: addElementTypes
        };

    };
})();