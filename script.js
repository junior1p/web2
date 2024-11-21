document.addEventListener('DOMContentLoaded', function() {
    // 获取轮播相关元素
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    
    // 自动轮播间隔时间（毫秒）
    const autoPlayInterval = 5000;
    
    // 显示指定索引的图片
    function showSlide(index) {
        // 确保索引在有效范围内
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        
        // 计算位移距离
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
    
    // 下一张图片
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    // 上一张图片
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    
    // 添加按钮点击事件
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // 自动轮播
    setInterval(nextSlide, autoPlayInterval);
}); 