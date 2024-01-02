import "./directory-component.scss";

const Directory = (props) => {
    const { properties:{id,title,imageUrl} } = props;
    return (
        <div className="directory-item-container" key={id}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>

        </div>
    );

}


export default Directory;