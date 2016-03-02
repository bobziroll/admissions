var app = angular.module("AdmissionsApp");

app.service("ProgressCheckService", ["$sessionStorage", function ($sessionStorage) {
    $sessionStorage.applicant = $sessionStorage.applicant || {lastCompletedLevel: 0};

    this.checkProgress = function () {
        return $sessionStorage.applicant.lastCompletedLevel;
    };

    this.updateProgress = function (newProgressLevel) {
        $sessionStorage.applicant.lastCompletedLevel = newProgressLevel;
    };

    this.resetProgress = function () {
        $sessionStorage.applicant.lastCompletedLevel = 0;
    }
}]);