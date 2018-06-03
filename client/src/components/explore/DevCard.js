import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col  } from 'reactstrap';
import TextTruncate from 'react-text-truncate';

class DevCard extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                <Col md="12.5">
                <Card body>
                    <CardImg top width="100%" src={profile.user.avatar} alt="Profile" />
                    <CardBody>
                        <CardTitle>{profile.user.name}</CardTitle>
                        <CardSubtitle>{profile.user.status}</CardSubtitle>
                        <CardText>
                            <TextTruncate
                                line={2}
                                truncateText="…"
                                text={profile.bio}
                                textTruncateChild={<Link to={`/profile/${profile.handle}`}>Read on</Link>}
                            />
                        </CardText>
                        <Link to={`/profile/${profile.handle}`}><Button>View Page</Button></Link>
                    </CardBody>
                </Card>
                </Col>
            </div>
        );
    }
}


    // <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            //     <Link to={`/profile/${profile.handle}`}> <img alt='Profile' src={profile.user.avatar} /> </Link>
            //     <div>
            //         <h2>{profile.user.name}</h2>
            //     </div>
            // </div>

DevCard.propTypes = {
    profile: PropTypes.object.isRequired
};

export default DevCard;

