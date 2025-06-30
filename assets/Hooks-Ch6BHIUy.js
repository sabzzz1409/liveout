import{j as e}from"./main-3xtZiR9e.js";const i=()=>{const a=[{hookName:"useState",purpose:"to store state in functional components",usage:`
            const[ state, setState ] = useState(initialValue);
        
            to access: 
            state
            
            to change:
            setState(value);
            (or)
            setState(prv => fn(prv))
            `},{hookName:"useEffect",purpose:"to detect changes in component rerender changes in it",usage:`
            useEffect( ( ) => { 
                func()      // mostly for api, interactions and settings 
                },
                [ dependent_variables ]      // if empty renders everytime    
            )
            `},{hookName:"useContext",purpose:"to transfer data from components to another seamlessly without parent child relation",usage:`
                learning
            `}],s="https://react.dev/reference/react/hooks";return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["for detailed reading refer :  ",e.jsx("a",{href:s,className:`hover:text-blue-900 underline \r
                hover:bg-blue-700 hover:text-white px-4 py-1 rounded`,target:"_blank",children:s})]}),e.jsx("div",{className:"text-lg font-bold",children:"React Hooks learned and neccessary sa far right now"}),a.map((t,o)=>e.jsxs("div",{className:"border-2 p-4 rounded",children:[e.jsx("div",{className:"text-md font-bold",children:`${o+1}. ${t.hookName}`}),e.jsx("div",{className:"pl-4",children:t.purpose}),e.jsxs("pre",{children:[" ",t.usage.split(`
`).map((r,n)=>e.jsx("div",{children:r},n))]})]},t.hookName))]})};export{i as default};
