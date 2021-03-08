import Mock from 'mockjs'

Mock.mock('/shuju',{
    'log':'新闻频道',
    'yule':[
        {title:"娱乐标题",cont:'内容'},
        {title:"娱乐标题2",cont:'内容2'}
    ],
    'shehui':[
        {title:"社会标题",cont:'内容'},
        {title:"社会标题2",cont:'内容2'}
    ]
})