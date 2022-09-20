function ProductCard() {
    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src="./logo192.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-6">bid amount</div>
                            <div class="col-6">bid amount</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">countdown</div>
                            <div class="col-4">bids</div>
                        </div>
                    </li>
                </ul>
                <div class="card-body text-center">
                    <a href={"./"} className="card-link">Card link</a>
                </div>
            </div>
        </>
    );
}

export default ProductCard;