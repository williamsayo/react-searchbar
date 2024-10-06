import image from '../assets/bg.jpg'

const Card = ({ title, userId, id }) => {
    return (
        <div className='container'>
            <div className='card-container'>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className='grid-container'>
                    <div className='grid-container'>
                        <span className='title text-lg'>title : {title}</span>
                        <span className='text-sm'>id : {id}</span>
                        <span className='text-sm'>userID : {userId}</span>
                    </div>
                    <div>
                        <button className='btn-primary'>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
