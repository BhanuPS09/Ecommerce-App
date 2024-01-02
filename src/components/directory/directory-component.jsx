import Category from "../directory-item/directory-item.component";
import "./directory-styles.scss";

const Directory = (props) => {
    const {array}=props;
    return (
        <div className="categories-container">

            {array.map((element) => {
                return (
                    <Category key={element.id} properties={element} />
                );
            })}

        </div>
    );

}

export default Directory;