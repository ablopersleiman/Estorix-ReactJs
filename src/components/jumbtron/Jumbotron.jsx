import assets from '../../assets';

export default function Jumbotron() {

    return (
        <header style={{ marginTop: "4.3rem", padding: ".5rem" }}>
            {<div
                className='text-center bg-image img-thumbnail'
                style={{
                    backgroundImage: `url(${assets.identifies.JumbotronImage})`,
                    height: '30rem',
                }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100 p-5'>
                        <div className='text-white w-75'>
                            <p className='text-start fs-1 mb-2'>Welcome To Our Store</p>
                            <p className="text-start fs-6">
                                Welcome to our store! Discover a wide range of high-quality products at competetive prices,all in one place. Enjoy e seamless
                                shopping experience with fast delivery and exclusive deals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
        </header>
    );
}