const productExtraDetails = {
    "Nivan Speedometer Cable Assembly": {
        Brand: "Nivan",
        Length: "Long",
        Material: "Steel",
        InnerCore: "Single Strand",
        EndFittings: "Model Specific",
        VehicleBrand: "Honda",
        VehicleModel: "Activa 4G, Activa 5G"
    },
    "Nivan Rear Brake Cable Assembly": {
        VehicleBrand: "Hero",
        vehicleModel: "Maestro",
        origin: "OEM",
        productBrand: "Nivan",
        vehicleType: "Bike/ Scooty",
        material: "Steel",
        position: "Front"
    },
    "Nivan Throttle Cable Assembly": {
        color: "Black",
        diameter: "1.5 mm",
        brand: "Nivan",
        bikeBrand: "Hero",
        bikeModel: "Activa 3G, Activa 4G",
        length: "1 Meter"
    },
    "Nivan Deluxe Throttle Cable Assembly": {
        color: "Black",
        length: "1 Meter",
        material: "Steel",
        vehicleBrand: "Hero",
        vehicleModel: "Passion Pro",
        brand: "Nivan"
    },
    "Nivan Deluxe Speedometer Cable Assembly": {
        length: "Long",
        material: "Steel",
        endFittings: "Model Specific",
        brand: "Nivan",
        diameter: "1.5 mm",
        vehicleBrand: "Hero",
        vehicleModel: "Hf Delux"
    },
    "Nivan Dawn Old Model Throttle Cable Assembly": {
        color: "Black",
        length: "1 Meter",
        material: "Steel",
        vehicleBrand: "Hero",
        vehicleModel: "Passion Plus",
        brand: "Nivan"
    },
    "Nivan HF DLX BS6 Throttle Cable Assembly": {
        color: "Black",
        length: "1 Meter",
        material: "Steel",
        brand: "Nivan",
        vehicleBrand: "Hero",
        vehicleModel: "Splendor Plus"
    },
    "Nivan Stunner Clutch Cable Assembly": {
        bikeBrand: "Hero",
        bikeModel: "Shine",
        modelYear: "2018",
        origin: "OEM",
        productBrand: "Nivan",
        length: "1 m",
        diameter: "1.5 mm"
    },
    "Nivan Stunner Throttle Cable Assembly": {
        color: "Black",
        diameter: "1.5 mm",
        bikeBrand: "Honda",
        bikeModel: "Shine",
        length: "1 Meter",
        brand: "Nivan"
    },
    "Nivan Stunner Front Brake Cable Assembly": {
        vehicleBrand: "Hero",
        vehicleModel: "Dream Yuga",
        position: "Front",
        modelYear: "2018",
        productBrand: "Nivan",
        vehicleType: "Bike/ Scooty",
        material: "Steel"
    },
    "Nivan Jupiter Rear Brake Cable Assembly": {
        vehicleBrand: "TVS",
        vehicleModel: "Jupiter",
        position: "Rear",
        origin: "OEM",
        productBrand: "Nivan",
        vehicleType: "Bike/ Scooty",
        material: "Steel"
    },
    "Nivan Jupiter Throttle Cable Assembly": {
        color: "Black",
        diameter: "1 mm",
        brand: "Nivan",
        vehicleBrand: "TVS",
        vehicleModel: "Jupiter",
        length: "1 Meter"
    },
    "Nivan Front Brake Cable Assembly": {
        size: "52 Inch",
        color: "Black",
        usage: "Transmit the force from the brake lever on the handlebars to the front brake calipers",
        insulationMaterial: "PVC",
        packType: "Packet",
        brand: "Nivan"
    },
    "Nivan HF DLX 856 Front Brake Cable Assembly": {
        color: "Black",
        vehicleBrand: "Hero",
        vehicleModel: "HF Delux",
        length: "1 Meter",
        diameter: "1.5 mm",
        brand: "Nivan"
    },
    "Activa Self Start Switch": {
        VehicleModel: "2021",
        Material: "PVC",
        CurrentRating: "6A",
        UsageApplication: "For Activa",
        SurfaceFinish: "Polished"
    },
    "Nivan Activa PU Green Bush": {
        InnerDiameter: "70 mm",
        Shape: "Round",
        PackagingType: "Packet",
        Color: "Green (Outer)",
        Brand: "Nivan",
        IdealFor: "Activa"
    },
    "Nivan Air Filter": {
        FiltrationMediumMaterial: "Synthetic Fiber",
        UsageApplication: "Bike",
        Color: "Green",
        VehicleModel: "Dream Yuga",
        Brand: "Nivan",
        VehicleBrand: "Honda"
    },
    "Nivan Pleasure Air Filter": {
        ScooterBrand: "Hero",
        ScooterModel: "Pleasure/Mastro",
        Origin: "OEM",
        ProductBrand: "Nivan",
        Color: "Yellow And Black"
    },
    "Nivan Stainless Steel Bearings": {
        NumberOfRows: "Single Row",
        InnerDiameter: "6 mm",
        Material: "Stainless Steel",
        Color: "Silver",
        Finishing: "Polished",
        Brand: "Nivan"
    },
    "MN Chain Lubrication Spray": {
        UnitPackSize: "150ml",
        IdealFor: "Motorcycle",
        PackagingType: "Bottle",
        UsageApplication: "Used to lubricate and protect chains on bicycles, motorcycles, and other vehicles",
        Brand: "MN Spray",
        Form: "Liquid"
    },
    "MN Rust Off Spray": {
        PackagingSize: "150 ml",
        PackagingType: "Spray Bottle",
        UsageApplication: "Can adhere to the rusted parts of your bike, de-moisturize those parts",
        Type: "Acid, rust remover or rust converter",
        ShelfLife: "2 Years",
        Brand: "MN"
    },
    "Nivan Activa Brake Shoe": {
        VehicleBrand: "Honda",
        Material: "Cast Iron",
        Position: "Front",
        Origin: "OEM",
        VehicleModel: "Activa",
        Brand: "Nivan"
    },
    "Nivan Hero Honda Brake Shoe": {
        Material: "Cast Iron",
        Position: "Front",
        Usage: "Bike",
        Type: "Brake Shoe",
        ProductBrand: "Nivan",
        VehicleBrand: "Hero"
    },
    "Nivan Activa 110 Link Bush Kit": {
        Material: "Rubber-Metal",
        SurfaceFinish: "Polished",
        Compatible: "Activa 110",
        PackType: "Packet",
        SetContains: "14 Pieces",
        Brand: "Nivan"
    }
};
function toggleMenu() {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('show');
        }

        function redirectToContact() {
            window.location.href = 'contactus.html';
        }

        function redirectToProduct(){
            window.location.href = 'products.html'
        }

        // Add this JavaScript
        document.addEventListener("DOMContentLoaded", () => {
            const track = document.querySelector(".carousel-track");
            const items = Array.from(track.children).filter((child) => child.classList.contains("product-item"));
            const prevButton = document.querySelector(".carousel-btn.prev");
            const nextButton = document.querySelector(".carousel-btn.next");
        
            let visibleItems = calculateVisibleItems();
            let currentIndex = 0;   
        
    
            window.addEventListener("resize", () => {
                visibleItems = calculateVisibleItems();
                currentIndex = Math.min(currentIndex, items.length - visibleItems); // Ensure index is valid
                moveCarousel();
            });
        
            function calculateVisibleItems() {
                const containerWidth = document.querySelector(".carousel-container").offsetWidth;
                const itemWidth = items[0].offsetWidth;
                return Math.max(1, Math.floor(containerWidth / itemWidth)); // At least 1 visible item
            }
        
            function moveCarousel() {
                const itemWidth = items[0].offsetWidth;
                const maxIndex = Math.max(0, items.length - visibleItems);
        
                // Adjust the current index to stay within bounds
                currentIndex = Math.min(maxIndex, Math.max(0, currentIndex));
        
                // Translate the carousel track
                track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
                // Update button states
                updateButtons(maxIndex);
            }
        
            function updateButtons(maxIndex) {
                prevButton.disabled = currentIndex === 0;
        
                // Allow forward movement only if there are enough items to scroll
                nextButton.disabled = currentIndex === maxIndex && (items.length > visibleItems || visibleItems === 1);
        
                // Mobile-specific behavior for exactly 2 items
                if (visibleItems === 1 && items.length === 2) {
                    nextButton.disabled = false;
                }
            }
    

    nextButton.addEventListener('click', () => {
        const maxIndex = Math.max(0, items.length - visibleItems);
        if (currentIndex < maxIndex || (visibleItems === 1 && items.length === 2)) {
            currentIndex++;
            moveCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    });

    window.addEventListener('resize', () => {
        visibleItems = window.innerWidth <= 768 ? 1 : 5;
        currentSlide = 0; // Reset to start on resize
        moveCarousel();
    });

    // Initialize
    moveCarousel();

    const modal = document.getElementById('productModal');
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get product details
            const productDetails = item.querySelector('.product-details');
            const imgSrc = item.querySelector('img').src;
            const modalTitle = productDetails.children[0].textContent;
            const modalPrice = productDetails.children[1]?.textContent || 'Price not available';
            const modalMOQ = productDetails.children[2]?.textContent || 'MOQ not available';
    
            // Set image source
            document.getElementById('modalImage').src = imgSrc;
    
            // Update desktop-specific details (center-column)
            const centerTitleElement = document.getElementById('modalTitle');
            const centerPriceElement = document.getElementById('modalPrice');
            const centerMOQElement = document.getElementById('modalMOQ');
    
            if (centerTitleElement) centerTitleElement.textContent = modalTitle;
            if (centerPriceElement) centerPriceElement.textContent = modalPrice;
            if (centerMOQElement) centerMOQElement.textContent = modalMOQ;
    
            // Update mobile-specific details (mobile-details)
            const mobileTitleElement = document.getElementById('mobileTitle');
            const mobilePriceElement = document.getElementById('mobilePrice');
            const mobileMOQElement = document.getElementById('mobileMOQ');
    
            if (mobileTitleElement) mobileTitleElement.textContent = modalTitle;
            if (mobilePriceElement) mobilePriceElement.textContent = modalPrice;
            if (mobileMOQElement) mobileMOQElement.textContent = modalMOQ;
    
            // Extra details handling
            const extraDetails = productExtraDetails[modalTitle];
            const extraDetailsContainer = document.getElementById('modalExtraDetails');
            if (extraDetailsContainer) {
                extraDetailsContainer.innerHTML = '';
                if (extraDetails) {
                    Object.entries(extraDetails).forEach(([key, value]) => {
                        const detailElement = document.createElement('p');
                        detailElement.innerHTML = `<strong>${key}:</strong> ${value}`;
                        extraDetailsContainer.appendChild(detailElement);
                    });
                } else {
                    extraDetailsContainer.textContent = 'No additional details available';
                }
            }
    
            // Display modal
            modal.style.display = 'flex';
        });
    });
    
    // Close modal logic
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});