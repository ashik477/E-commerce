

const SectionHeading = ({heading, colorHeading, description}) => {
    return(
        <div>
            <div>
                <h3 className="text-4xl text-gray-700 font-semibold">{heading} <span className="cp">{colorHeading}</span></h3>
                <p className="ts">{description}</p>
            </div>
        </div>
    );
};

export default SectionHeading;