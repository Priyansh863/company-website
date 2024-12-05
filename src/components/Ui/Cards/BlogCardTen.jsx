import Link from "next/link";

const BlogCardTen = ({ item }) => {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                    <div className="tekup-blog-thumb">
                        <img src={item?.thumbnail} alt="" />
                    </div>
                </Link>
                <div className="tekup-blog-content">
                    <Link href="">
                        <h3>{item?.title}</h3>
                    </Link>
                    <div className="tekup-blog-meta tekup-blog-meta3">
                        <ul>
                            <li><Link href="">{item?.category}</Link></li>
                            <li><Link href="">{item?.date}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardTen;