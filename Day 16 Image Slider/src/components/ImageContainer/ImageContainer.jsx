function ImageContainer({downloadUrl, id=0}={}){
    return <>
        <div className="w-[80%] h-[80%] rounded-xl overflow-hidden">
            <h1>{id}</h1>
            <img src={downloadUrl} alt="image" className=" object-cover object-center w-full h-full"/>
        </div>
    </>
}

export default ImageContainer;