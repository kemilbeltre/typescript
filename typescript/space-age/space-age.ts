class SpaceAge{
    private years : number;

    constructor (public seconds: number){
        this.years = seconds / 31557600;
    }

    private convertEarthYears = (factor: number) =>
        Number ((this.years / factor).toFixed(2));

    onEarth = () => Number(this.years.toFixed(2));
    onMercury = () => this.convertEarthYears(0.2408467);
    onVenus = () => this.convertEarthYears(0.61519726);
    onMars = () => this.convertEarthYears(1.8808158);
    onJupiter = () => this.convertEarthYears(11.862615);
    onSaturn = () => this.convertEarthYears(29.447498);
    onUranus = () => this.convertEarthYears(84.016846);
    onNeptune = () => this.convertEarthYears(164.79132);
}
export default SpaceAge;