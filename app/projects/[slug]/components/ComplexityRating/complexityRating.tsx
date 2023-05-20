import classes from './complexityRating.module.css';

interface ComplexityRatingProps {
    rating: number;
}

export function ComplexityRating({
    rating,
}: ComplexityRatingProps): JSX.Element {
    return (
        <div>
            <p>Complexity:</p>
            <div
                className={classes.stars}
                style={{ '--rating': rating } as React.CSSProperties}
                aria-label={`Complexity of this project is ${rating} out of 5.`}
            ></div>
        </div>
    );
}
