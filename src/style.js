import { IoIosColorFill } from "react-icons/io";

const normalWidth = "500px";


const styles = ({
    bodyWrapper: {
         width: "calc(100vw - 17px)",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "scroll",
        overflowX: "hidden",
        margin: "0px",
        padding: "0px",
        height: "100%"
    },
    headerWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    title: {
        marginBottom: "0px",
    
        textAlign: "center"
    },
    subtitle: {
        display: "flex", 
        justifyContent: "space-evenly", 
        marginBottom: "5px"},
    displayComponent:{
        width: normalWidth,
        height: "500px",
        display: "flex",
        justifyContent: "center",
        background: "rgba(250,250,250,1)",
        borderRadius: "10px",
        
    },
    displayShadow:{
        // boxShadow: '5px 10px 8px rgba(100,100,100,0.1)',
        // margin: "20px",
        // borderRadius: "10px",
    },
    wholeNav: {
        margin: "20px 0px 20px 0px",
        display: "flex", 
        padding:"0",
        justifyContent: "space-evenly", 
        width: normalWidth,
        background:"white",
         position:"initial",
        // zIndex:"1000"
    },
    wholeNavFixed: {

        paddingTop:"5px",
        paddingBottom:"5px",
        margin: "0 0px 0px 0px",
        display: "flex", 
        justifyContent: "space-evenly", 
        width: "100vw",
        background:"white",
         position:"fixed",
         zIndex:"1000"
    },
    firstNav: {
        padding: "0",
        margin: "0",
        display: "flex", 
        justifyContent: "space-evenly", 
        width: "100%",
        flexWrap: "wrap",
    },
    secondNav: {
        margin: "3px 0px 3px 0px",
        padding: "0px",
        display: "flex",
        width: "100%",
        alignItems: "center"
    },
    secondnavshow: {
        margin: "0",
        display: "flex",
        justifyContent: "space-evenly",
        opacity: "1",
        transition: "opacity 0.7s ease-in-out",
        width: "100%",
        alignItems: "center"
    },
    secondnavhide: {
        margin: "0",
        display: "flex",
        justifyContent: "space-evenly",
        opacity: "0",
        transition: "opacity 0.3s ease-in-out",
        width: "100%",
        alignItems: "center"
    },
    link: {
        padding: "0",
        maring: "0",
        margin: "0px"
        
    },
    optButtons: {
        padding: "0",
        maring: "0",
        width: "100hh",
        height: "50px",
    },
    rightArrowShow: {
        position: "relative",
        opacity: "1",
        transition: "opacity 0.7s ease-in-out",
        right: "5%",
        width: "100px",
        height: "100px",
        border: "solid rgb(230, 230, 230)",
        borderWidth: "0px 5px 10px 0px",
        display: "inline-block",
        padding: "0px",
        transform: "rotate(-45deg)",
        WebkitTransform: "rotate(-45deg)"
    },
    rightArrowHide: {
        position: "relative",
        opacity: "0",
        right: "5%",
        transition: "opacity 0.3s ease-in-out",
        width: "100px",
        height: "100px",
        border: "solid rgb(230, 230, 230)",
        borderWidth: "0px 5px 10px 0px",
        display: "inline-block",
        padding: "0px",
        transform: "rotate(-45deg)",
        WebkitTransform: "rotate(-45deg)"
    },
    leftArrowShow: {
        position: "relative",
        opacity: "1",
        transition: "opacity 0.7s ease-in-out",
        left: "5%",
        width: "100px",
        height: "100px",
        border: "solid rgb(230, 230, 230)",
        borderWidth: "0px 10px 5px 0px",
        display: "inline-block",
        padding: "0px",
        transform: "rotate(135deg)",
        WebkitTransform: "rotate(135deg)"
    },
    leftArrowHide: {
        position: "relative",
        opacity: "0",
        left: "5%",
        transition: "opacity 0.3s ease-in-out",
        width: "100px",
        height: "100px",
        border: "solid rgb(230, 230, 230)",
        borderWidth: "0px 10px 5px 0px",
        display: "inline-block",
        padding: "0px",
        transform: "rotate(135deg)",
        WebkitTransform: "rotate(135deg)"
    },
    contentWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },



});

export default styles;