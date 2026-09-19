$css = Get-Content "d:\leadership\assets\css\style.css" -Raw

# 1. Update dark mode button hover background to yellow (accent) for primary buttons
$css = $css -replace '(?s)body\.dark-mode \.btn-primary-custom,\s*body\.dark-mode \.btn-primary-custom:hover,\s*body\.dark-mode \.bg-primary', 'body.dark-mode .btn-primary-custom,
body.dark-mode .bg-primary'

$css = $css -replace '(?s)body\.dark-mode \.btn-outline-custom:hover,\s*body\.dark-mode \.btn-outline-secondary:hover \{', 'body.dark-mode .btn-primary-custom:hover,
body.dark-mode .btn-secondary-custom:hover,
body.dark-mode .btn-outline-custom:hover,
body.dark-mode .btn-outline-secondary:hover {'

Set-Content "d:\leadership\assets\css\style.css" $css

$curriculum = Get-Content "d:\leadership\curriculum.html" -Raw

# 2. The Three Pillars - col-lg-4 col-md-12
$curriculum = $curriculum -replace '(?s)<div class="col-md-6">\s*<div class="p-4 border border-light rounded-4 h-100 shadow-sm">\s*<i class="ph-fill ph-brain', '<div class="col-lg-4 col-md-12">
                      <div class="p-4 border border-light rounded-4 h-100 shadow-sm">
                          <i class="ph-fill ph-brain'
$curriculum = $curriculum -replace '(?s)<div class="col-md-6">\s*<div class="p-4 border border-light rounded-4 h-100 shadow-sm">\s*<i class="ph-fill ph-microphone-stage', '<div class="col-lg-4 col-md-12">
                      <div class="p-4 border border-light rounded-4 h-100 shadow-sm">
                          <i class="ph-fill ph-microphone-stage'
$curriculum = $curriculum -replace '(?s)<div class="col-md-6">\s*<div class="p-4 border border-light rounded-4 h-100 shadow-sm">\s*<i class="ph-fill ph-users-three', '<div class="col-lg-4 col-md-12">
                      <div class="p-4 border border-light rounded-4 h-100 shadow-sm">
                          <i class="ph-fill ph-users-three'

# 2. A Typical 6-Week Journey - use bg-primary for all icons
$curriculum = $curriculum -replace 'bg-secondary text-white rounded-circle', 'bg-primary text-white rounded-circle'
$curriculum = $curriculum -replace 'bg-energy text-white rounded-circle', 'bg-primary text-white rounded-circle'
$curriculum = $curriculum -replace 'bg-accent text-dark rounded-circle', 'bg-primary text-white rounded-circle'
$curriculum = $curriculum -replace 'bg-accent text-white rounded-circle', 'bg-primary text-white rounded-circle'

Set-Content "d:\leadership\curriculum.html" $curriculum

$index = Get-Content "d:\leadership\index.html" -Raw
# 3. Home More Than A Camp - tab view one card per row
$index = $index -replace '<div class="col-lg-4 col-md-4 fade-up"', '<div class="col-lg-4 col-md-12 fade-up"'
Set-Content "d:\leadership\index.html" $index
