import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                worklist: {
                    name: '工作',
                    list: [
                        {
                            url: 'https://reactnative.cn/docs/getting-started.html',
                            name: 'React-native文档'
                        },
                        {
                            url: 'http://tool.oschina.net/hexconvert/',
                            name: '进制转换'
                        },
                        {
                            url: 'https://github.com/',
                            name: 'github'
                        },
                        {
                            url: 'https://www.w3cschool.cn/tools/index?name=cpicker',
                            name: '颜色读取'
                        },
                        {
                            url: 'https://mobile.umeng.com/platform/apps/list',
                            name: '友盟'
                        },
                    ],
                },
                studyList: {
                    name: '学习',
                    list: [
                        {
                            url: 'https://www.reactjscn.com/docs/hello-world.html',
                            name: 'React'
                        },
                        {
                            url: 'https://cn.vuejs.org/v2/guide/',
                            name: 'VUE'
                        },
                        {
                            url: 'http://www.w3school.com.cn/html/index.asp',
                            name: 'HTML'
                        },
                        {
                            url: 'http://es6.ruanyifeng.com/',
                            name: 'ES6'
                        },
                        {
                            url: 'https://www.imooc.com/article/27790',
                            name: '正则表达式'
                        },
                    ],
                },
                freeList: {
                    name: '娱乐',
                    list: [
                        {
                            url: 'http://www.gangqinpu.com/html/5366.htm',
                            name: '钢琴曲'
                        },
                        {
                            url: 'https://www.youku.com/',
                            name: '优酷'
                        },
                        {
                            url: 'https://www.baidu.com/s?wd=nba',
                            name: 'NBA'
                        },
                        {
                            url: 'https://www.jd.com/',
                            name: '京东'
                        },
                    ],
                },
            },
            selectedType: 'worklist',
        }
    }

    _renderList() {
        let section = []
        for (const key in this.state.data) {
            let { name, list } = this.state.data[key]
            section.push(
                <div>
                    <input type='button' className='typeinput' onClick={() => this.setState({ selectedType: key })} value={name}/>
                    {
                        this.state.selectedType === key &&
                        <ul className='list'>
                        {
                            list.map((item, index) => {
                                return this._renderCommonItem(item)
                            })
                        }
                        </ul>
                    }
                </div>
            )
        }
        return (
            <div>
                {section}
            </div>
        )
    }

    _renderCommonItem(item) {
        let { url, name } = item
        return (
            <li>
                <a href={url} target='_blank' style={{ textDecoration: 'none' }}>
                    <text style={{ color: '#ccff33', fontSize: 21, fontWeight: 400 }}>{name}</text>
                </a>
            </li>
        )
    }

    render() {        
        return (
            <div className="container">
                <div className='home'>
                    <h1>我的最常用网址</h1>
                    {this._renderList()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);