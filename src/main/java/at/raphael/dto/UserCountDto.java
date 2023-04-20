package at.raphael.dto;

public class UserCountDto {

    public Long id;
    public String firstName;
    public String lastName;
    public String shortName;
    public long count;

    public UserCountDto(String firstName, String lastName, String shortName, long count) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortName = shortName;
        this.count = count;
    }
}
