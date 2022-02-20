import "./app-info.css";

const AppInfo = (props) => {
    const {data} = props;
    const number = data.length

    let index = data.map(item => item.increase === true);
    let newArr = index.filter(item => item === true).length;

    console.log(index)
    console.log(newArr)
    

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {number}</h2>
            <h2>Премию получат: {newArr}</h2>
        </div>
    )
}

export default AppInfo;