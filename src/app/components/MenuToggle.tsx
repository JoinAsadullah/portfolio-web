
// import { motion } from "framer-motion";

// const Path = props => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="2.3"
//     stroke="#fff"
//     strokeLinecap="round"
//     {...props}
//   />
// );

export default function MenuToggle(){
    return(
    <button type="button" className="">
        <svg width="27" height="23" viewBox="0 0 22 23">
        <path
            d= "M 3 8 L 20 8"  stroke="var(--foreground)" strokeWidth={2} strokeLinecap="round"
        />

        <path
            d="M -1 15.346 L 20 15.346" stroke="var(--foreground)" strokeWidth={2} strokeLinecap="round"
        />
        </svg>
    </button>
)};

{/* <path
d="M 3 2.5 L 17 16.346" stroke="var(--foreground)" strokeWidth={2} strokeLinecap="round"
/>

        <path
            d= "M 3 16.5 L 17 2.5"  stroke="var(--foreground)" strokeWidth={2} strokeLinecap="round"
        /> */}