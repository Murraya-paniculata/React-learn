import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

function A() {
    return <h1>组件A</h1>
}

function B() {
    return <h1>组件B</h1>
}

function C() {
    return <h1>
        找不到页面
    </h1>
}


// export default function Tester() {
//     return (
//         <HashRouter path>
//             <Route path="/a" exact component={A} />
//             <Route path="/a/b" exact component={B} />
//             <Route exact component={C} />
//         </HashRouter>
//     )
// } 

// export default function Tester() {
//     return (
//         <HashRouter path>
//             <Switch>
//                 <Route path="/a" exact component={A} />
//                 <Route path="/a/b" exact component={B} />
//                 <Route exact component={C} />
//             </Switch>
//         </HashRouter>
//     )
// } 

/**
 * 例三
 */
export default function Tester() {
    return (
        <HashRouter path>
                <Route path="/a" exact component={A}>
                    <span style={{color: "red"}}>但还是拒绝</span>
                </Route>
                <Route path="/a/b" exact component={B}>
                    {
                        () => {
                            return <span style={{color: "red"}}>啦啦啦</span>
                        }
                    }
                </Route>
                <Route exact component={C} />
        </HashRouter>
    )
} 

