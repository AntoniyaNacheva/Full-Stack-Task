import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <div>
            <Link to="/"> All Notes</Link>
            <Link to="/create-note"> New Note</Link>
        </div>
    );
};