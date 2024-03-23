import { Link } from "react-router-dom";

interface AnchorToProps {
    url: string;
    value: string;
}

const AnchorTo = (props: AnchorToProps) => {
    const { url, value } = props;
    return <Link to={url}>{value}</Link>;
};

export default AnchorTo;