import { Card, Col } from "react-bootstrap";
import image from "../assets/news2.jpg";

const HelperCard = ({ imgUrl, title, des, srcName, url, pAt }) => {
    return (
        <>
            <Col md="4">
                <Card className="card w-100 m-2 p-3" data-bs-theme="dark">
                    <Card.Img
                        className="img-fluid img"
                        variant="top"
                        src={imgUrl ? imgUrl : image}
                    ></Card.Img>
                    <Card.Title className="mt-2">
                        {title && title !== "[Removed]"
                            ? title
                            : "Sorry!.. Title of the news is not available right now"}
                    </Card.Title>
                    <Card.Text>
                        {des && des !== "[Removed]"
                            ? des.slice(0, 50)
                            : "Sorry!.. Description of the news is not available right now"}
                    </Card.Text>
                    <div className="d-flex justify-content-between m-1">
                        <Card.Text>
                            @
                            {srcName && srcName !== "[Removed]"
                                ? srcName
                                : "unknown source"}
                        </Card.Text>
                        <a
                            className="btn btn-primary mb-2"
                            href={url ? url : "/"}
                        >
                            Read More
                        </a>
                    </div>
                    <Card.Footer className="text-muted">
                        {pAt && pAt !== "[Removed]" ? pAt : "unknown"}
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default HelperCard;
