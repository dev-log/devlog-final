// import React from 'react';
// import { UncontrolledCarousel } from 'reactstrap';
//
// const items = [
//     {
//         src: 'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?cs=srgb&dl=adult-chill-computer-450271.jpg&fm=jpg',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         header: 'Project 1'
//     },
//     {
//         src: 'https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?cs=srgb&dl=close-up-code-coding-239898.jpg&fm=jpg',
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         header: 'Project 2'
//     },
//     {
//         src: 'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?cs=srgb&dl=apple-device-blur-blurry-273222.jpg&fm=jpg',
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         header: 'Project 3'
//     }
// ];
//
//
//
// const ProjCarousel = () => <UncontrolledCarousel className="custom-tag" items={items} />;
//
// export default ProjCarousel;

// import React, { Component } from 'react';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
// } from 'reactstrap';
//
// const items = [
//     {
//         imgsrc: 'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?cs=srgb&dl=adult-chill-computer-450271.jpg&fm=jpg',
//         id: 1,
//         altText: 'Slide 1',
//         caption: 'Slide 1'
//     },
//     {
//         src: 'https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?cs=srgb&dl=close-up-code-coding-239898.jpg&fm=jpg',
//         id: 2,
//         altText: 'Slide 2',
//         caption: 'Slide 2'
//     },
//     {
//         id: 3,
//         altText: 'Slide 3',
//         caption: 'Slide 3'
//     }
// ];
//
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { activeIndex: 0 };
//         this.next = this.next.bind(this);
//         this.previous = this.previous.bind(this);
//         this.goToIndex = this.goToIndex.bind(this);
//         this.onExiting = this.onExiting.bind(this);
//         this.onExited = this.onExited.bind(this);
//     }
//
//     onExiting() {
//         this.animating = true;
//     }
//
//     onExited() {
//         this.animating = false;
//     }
//
//     next() {
//         if (this.animating) return;
//         const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//         this.setState({ activeIndex: nextIndex });
//     }
//
//     previous() {
//         if (this.animating) return;
//         const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//         this.setState({ activeIndex: nextIndex });
//     }
//
//     goToIndex(newIndex) {
//         if (this.animating) return;
//         this.setState({ activeIndex: newIndex });
//     }
//
//     render() {
//         const { activeIndex } = this.state;
//
//         const slides = items.map((item) => {
//             return (
//                 <CarouselItem
//                     className="custom-tag"
//                     tag="div"
//                     key={item.id}
//                     onExiting={this.onExiting}
//                     onExited={this.onExited}
//                 >
//                     <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
//                 </CarouselItem>
//             );
//         });
//
//         return (
//             <div>
//                 <style>
//                     {
//                         `.custom-tag {
//                 max-width: 100%;
//                 height: 400px;
//                 background: black;
//               }`
//                     }
//                 </style>
//                 <Carousel
//                     activeIndex={activeIndex}
//                     next={this.next}
//                     previous={this.previous}
//                 >
//                     <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//                     {slides}
//                     <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//                     <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//                 </Carousel>
//             </div>
//         );
//     }
// }
//
// export default Example;



import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?cs=srgb&dl=adult-chill-computer-450271.jpg&fm=jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?cs=srgb&dl=close-up-code-coding-239898.jpg&fm=jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?cs=srgb&dl=apple-device-blur-blurry-273222.jpg&fm=jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className='custom-tag'
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default Example;