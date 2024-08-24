const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};


const noNews = () => {
    return (
        <div> Belum ada berita yang tersedia </div>
    )
}

const Newlists = ({ news }) => {
    return  !news ? noNews() : isNews(news)
};

export default Newlists;
